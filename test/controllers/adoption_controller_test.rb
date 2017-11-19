require "test_helper"

describe AdoptionController do
  it "should get index" do
    get adoption_index_url
    value(response).must_be :success?
  end

  it "should get show" do
    get adoption_show_url
    value(response).must_be :success?
  end

  it "should get edit" do
    get adoption_edit_url
    value(response).must_be :success?
  end

  it "should get new" do
    get adoption_new_url
    value(response).must_be :success?
  end

end
