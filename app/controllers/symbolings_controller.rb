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
    if @symboling.save
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
