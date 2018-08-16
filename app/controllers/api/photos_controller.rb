class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    @owner = @photo.author
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.where(author_id: params[:user_id])
    render :index
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      @owner = @photo.author
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
    @owner = @photo.author
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @owner = @photo.author
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:author_id, :title, :description, :location, :file)
  end

end
