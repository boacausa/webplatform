class V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    # TODO: update other attributes
    user = User.find(params_user[:id])
    user.update_attributes!(params_user.except(:id))

    render json: { success: true }.to_json, status: :ok
  end

  private

  def params_user
    params.permit(:id, :name)
  end
end

