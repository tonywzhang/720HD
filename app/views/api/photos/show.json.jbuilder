json.details do
  json.extract! @photo, :id, :title, :description, :location, :author_id, :created_at
  json.extract! @owner, :username
  json.photoUrl url_for(@photo.file)
end
# json.coverPhoto url_for(@user.coverPhoto)
