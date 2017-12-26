require "test_helper"

describe NgosController do
  it "should get index" do
    get ngos_index_url
    value(response).must_be :success?
  end

end
