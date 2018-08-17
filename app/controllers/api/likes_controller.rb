class Api::LikesController < ApplicationController

  def create
    @like = Like.new(user_id: current_user.id, photo_id: params[:photoId])

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def show
    @like = Like.find_by(user_id: current_user.id)
    render :show
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:id])
    @like.destroy
    render :show
  end

end
