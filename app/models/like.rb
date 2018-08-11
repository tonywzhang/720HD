# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  belongs_to :user,
   foreign_key: :user_id,
   class_name: :User

 belongs_to :photo,
   foreign_key: :photo_id,
   class_name: :Photo

end
