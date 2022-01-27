require "#{Rails.root}/app/services/marketstack_service.rb"
class SymbolingsController < ApplicationController

  def update
    @symboling = Symboling.find_by(id: params[:id])
    if @symboling.update(symboling_params)
      render json: { symboling: @symboling, status: "succeeded"}
    else
      render json: { status: "failed", message: @symboling.errors.full_messages }
    end
  end

  def create 
    @symboling = Symboling.new(symboling_params)
    symbol_info = MarketstackService.get_data("eod", params[:symboling][:name])
    return render json: { message: MarketstackService.parse_error_message(symbol_info), status: "failed" } if symbol_info.keys.include?("error")
    
    if @symboling.save
      close_price = symbol_info["data"].first["close"]
      Notification.create(wallet: @symboling.wallet, content: Notification.wallet_message(@symboling.name, 60)) if close_price > 60
      render json: { symboling: @symboling, status: "succeeded" }
    else
      render json: { message: @symboling.errors.full_messages, status: "failed" }
    end
  end

  private
  
  def symboling_params
    params.require(:symboling).permit(:name, :wallet_id)
  end
end


