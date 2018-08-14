# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  author_id   :integer          not null
#  title       :string           default("Untitled"), not null
#  description :text
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

class Photo < ApplicationRecord

  validates :author_id, :title, presence: true
  has_one_attached :file

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :likes,
  foreign_key: :photo_id,
  class_name: :Like

  has_many :likers,
    through: :likes,
    source: :user

end
