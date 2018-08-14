json.extract! @photo, :id, :title, :description, :location, :author_id

# json.coverPhoto url_for(@user.coverPhoto)
json.photoUrl url_for(@photo.file)
