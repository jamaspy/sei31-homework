# == Schema Information
#
# Table name: dogs
#
#  id           :integer          not null, primary key
#  name         :text
#  breed        :text
#  color        :text
#  dob          :date
#  image        :text
#  behaviour    :text
#  desexed      :boolean
#  kennel_cough :date
#  flea         :date
#  worm         :date
#  owner_id     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Dog <ActiveRecord::Base
end
