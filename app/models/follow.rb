# == Schema Information
#
# Table name: follows
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
   foreign_key: :user_id,
   class_name: :User

end
