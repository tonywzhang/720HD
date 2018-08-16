Rails.application.routes.draw do

  root to:"static_pages#root"

  namespace :api,defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :photos, only: [:create, :show, :update, :index, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

end

#

# Photo show jbuilder
# likes => like objs
# likers => user objs


#Build likes reducer
# RECEIVE_PHOTO
#PASSES UP ALL Likes
#action.details.likes ALL LIKES

#RECEIVE_LIKE #ACTIONS AS WELL
#RECEIVE_DISLIKE

#PHOTOSHOWCONTAINER
# numLikes from details (selector that counts number of Like Objects with current photo.id)
#currentUserLikes (boolean: true of false, is there a like that has photoId=currentPhotoId && userId===currentuser.Id)

#if current UserLikes is true, handleLike
# handleLike: () => dispatch(unLike(photoId))
#else
# handleLike: () => dispatch(like(photoId))

# handleLike:

#INTERPOLATE VALUES

#ADD CLICK HANDLER
#
# this.props.handleLike(photoId)
