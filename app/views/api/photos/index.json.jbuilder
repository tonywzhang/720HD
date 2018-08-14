@photos.each do |photo|
  json.set! photo.id do
  json.extract! photo, :id, :title, :image_url, :author_id
  end
end
