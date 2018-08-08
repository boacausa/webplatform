class NgoArea::UsersController < NgoAreaController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(params_user)

    redirect_to ngo_area_users_path
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update params_user

    redirect_to ngo_area_users_path
  end

  private

  def params_user
    params.require(:user).permit(:name, :email, :last_name, :cpf, :phone, :group, :password, :password_confirmation)
  end
end