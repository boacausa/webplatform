require "test_helper"

describe NgoHomeController do
  it "should get index" do
    get ngo_home_index_url
    value(response).must_be :success?
  end

end
