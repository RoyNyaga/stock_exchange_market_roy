class WalletsController < ApplicationController
  before_action :set_wallet, only: %i[ update destroy ]
  
  def index
    render json: Wallet.all
  end

  def update
    if @wallet.update(wallet_params)
      render json: @wallet, status: :updated
    else
      render json: { message: @wallet.errors.messages.join(","), status: :unprocessable_entity }
  end

  def create
    @wallet = Wallet.new(wallet_params)
    if @wallet.save
      render json: @wallet, status: :created
    else
      render json: {message: @wallet.errors.full_messages, status: :unprocessable_entity}
    end
  end
  
  private

  def wallet_params
    params.require(:wallet).permit(:name)
  end

  def set_wallet
    @wallet = Wallet.find_by(id: params[:id])
    return render status: 404, json: { message: "Record not found" }
  end
end
