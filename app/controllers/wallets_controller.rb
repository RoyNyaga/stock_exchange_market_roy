class WalletsController < ApplicationController
  before_action :set_wallet, only: %i[ update destroy ]
  
  def index
    render json: Wallet.all
  end

  def main_page
  end

  def update
    if @wallet.update(wallet_params)
      render json: { wallet: @wallet, status: "succeeded" }
    else
      render json: { message: @wallet.errors.messages.join(","), status: "failed" }
    end
  end

  def create
    @wallet = Wallet.new(wallet_params)
    if @wallet.save
      render json: {wallet: @wallet, status: "succeeded"}
    else
      render json: { message: @wallet.errors.full_messages.join(","), status: "failed" }
    end
  end
  
  private

  def wallet_params
    params.require(:wallet).permit(:name)
  end

  def set_wallet
    @wallet = Wallet.find_by(id: params[:id])
    return render json: { message: "Record not found", status: "failed" }
  end
end
