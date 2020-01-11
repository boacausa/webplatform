class NgoArea::UsersController < NgoAreaController
  before_action :check_admin_privileges

  helper UserGroupsHelper

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params_user)
    if @user.save
      redirect_to ngo_area_users_path
    else
      render action: :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(params_user)

    if current_user == @user && !@user.admin?
      redirect_to home_index_path
    else
      redirect_to ngo_area_users_path
    end
  end

  private

  def params_user
    params.require(:user).permit(:name, :email, :last_name, :cpf, :phone, :group, :password, :password_confirmation, ngo_ids: [])
  end

  def check_admin_privileges
    head :not_found unless current_user.admin?
  end
end
