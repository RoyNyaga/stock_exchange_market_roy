require "#{Rails.root}/app/services/marketstack_service.rb"
class SymbolingsController < ApplicationController
  before_action :set_symboling, only: %i[ destroy ]

  def update
    @symboling = Symboling.find_by(id: params[:id])
    symbol_info = MarketstackService.get_data("eod", params[:symboling][:name])
    return render json: { message: MarketstackService.parse_error_message(symbol_info), status: "failed" } if symbol_info.keys.include?("error")
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

  def destroy
    @symboling.destroy
    render json: { status: "succeeded" }
  end

  private

  def set_symboling
    @symboling = Symboling.find_by(id: params[:id])
    return render json: { message: "Record not found", status: "failed" } unless @symboling
  end
  
  def symboling_params
    params.require(:symboling).permit(:name, :wallet_id)
  end
end


