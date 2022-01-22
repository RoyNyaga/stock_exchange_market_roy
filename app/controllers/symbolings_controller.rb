class SymbolingsController < ApplicationController

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
