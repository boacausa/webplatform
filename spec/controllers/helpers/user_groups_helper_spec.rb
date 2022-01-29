# frozen_string_literal: true

require "rails_helper"

describe UserGroupsHelper, type: :helper do
  describe "#user_groups_for_select" do
    it "returns user groups" do
      expect(helper.user_groups_for_select).to(include(["Admin", "admin"]))
      expect(helper.user_groups_for_select).to(include(["Ngo", "ngo"]))
    end
  end
end
