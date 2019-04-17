# == Schema Information
#
# Table name: mountains
#
#  id       :integer          not null, primary key
#  name     :text
#  country  :text
#  altitude :integer
#  image    :text
#

class Mountain < ActiveRecord::Base
end
