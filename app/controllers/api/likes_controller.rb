class Api::LikesController < ApplicationController

  def create
    @like = Like.new(user_id: current_user.id, photo_id: params[:id])

    if @like.save
      @photo = Photo.find(@like.photo_id)
      @like = Like.where(user_id: current_user.id)
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:id])
    @photo = Photo.find(@like.photo_id)
    @like.destroy
    @like = Like.where(user_id: current_user.id)
    render :show
  end

end
