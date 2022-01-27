require "#{Rails.root}/app/services/marketstack_service.rb"
class WalletsController < ApplicationController
  before_action :set_wallet, only: %i[ update destroy symbolings notifications symbol_end_of_day_data]
  
  def index
    render json: Wallet.all.order(id: :desc)
  end

  def main_page
  end

  def symbol_end_of_day_data
    symboling_string = @wallet.symbolings.map(&:name).join(",")
    symbol_info = MarketstackService.get_data("eod", symboling_string)
    render json: symbol_info["data"][0,5]
  end

  def symbolings
    @symbols = @wallet.symbolings
    render json: @wallet.symbolings
  end

  def notifications
    render json: @wallet.notifications.order(id: :desc)
  end

  def update
    if @wallet.update(wallet_params)
      render json: { wallet: @wallet, status: "succeeded" }
    else
      render json: { message: @wallet.errors.messages, status: "failed" }
    end
  end

  def create
    @wallet = Wallet.new(wallet_params)
    if @wallet.save
      render json: {wallet: @wallet, status: "succeeded"}
    else
      render json: { message: @wallet.errors.full_messages, status: "failed" }
    end
  end
  
  private

  def wallet_params
    params.require(:wallet).permit(:name)
  end

  def set_wallet
    @wallet = Wallet.find_by(id: params[:id])
    return render json: { message: "Record not found", status: "failed" } unless @wallet
  end
end
