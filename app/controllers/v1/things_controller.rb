class V1::ThingsController < ApplicationController
  def index
    render json: {
      things: [
        name: 'some-thing',
        guid: 'hasidhasuihduasihduasdhas',
      ]
    }.to_json
  end
end
