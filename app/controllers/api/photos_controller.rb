class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.where(author_id: params[:user_id])
    render json: @photos
  end

  def show
    @photo = Photo.find(params[:id])
    render json: @photo
  end

  def destroy
    @photo = Photo.find(params[:id])
  end

  private

  def user_params
    params.require(:photo).permit(:author_id, :title, :description, :location)
  end

end
