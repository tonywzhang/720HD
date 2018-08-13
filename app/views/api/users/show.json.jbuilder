json.partial! "api/users/user", user: @user

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.img_url url_for(photo)
    end
  end  
end
