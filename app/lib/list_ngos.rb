# TODO: add specs
class ListNgos
  def all
    ngos = Ngo.actived
    add_extra_fields(ngos)
  end

  private

  def add_extra_fields(ngos)
    ngos.map do |ngo|
      NgoResponseAttributes.new(ngo).attributes
    end
  end
end
