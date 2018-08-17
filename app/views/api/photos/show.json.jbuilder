json.photo do
  json.set! @photo.id do
    json.extract! @photo, :id, :title, :description, :location, :author_id, :created_at
    json.photoUrl url_for(@photo.file)
  end
end
json.owner do
  json.set! @owner.id do
    json.extract! @owner, :id, :username
  end
end
json.likes do
  @photo.likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :user_id, :photo_id
    end
  end
end
json.likers do
  @photo.likers.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end

# json.coverPhoto url_for(@user.coverPhoto)
