class NgoArea::NgosController < NgoAreaController
  def index
    @ngos = Ngo.from_user(current_user)
  end

  def new
    @ngo = Ngo.new
  end

  def create
    @ngo = Ngo.create(params_ngo)

    redirect_to ngo_area_ngos_path
  end

  def edit
    @ngo = Ngo.find(params[:id])
  end

  def update
    @ngo = Ngo.find(params[:id])
    @ngo.update params_ngo

    redirect_to ngo_area_ngos_path
  end

  private

  def params_ngo
    params.require(:ngo).permit(:social_name, :fantasy_name, :phone_number1, :phone_number2, :email, :site, :cnpj,
                                :activity, :date_start, :description, :image, :active, :transparency_portal, :bank,
                                :agency, :operation, :account, :titular, :zipcode, :address_number, :address,
                                :neighborhood, :city, :state, :payment_type, :payment_form)
  end
end
