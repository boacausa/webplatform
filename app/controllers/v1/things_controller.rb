class V1::ThingsController < ApplicationController
  def index
    render json: {
      things: [
        { name: 'some-thing', guid: 'hasidhasuihduasihduasdhas' },
        { name: 'some-thing-2', guid: 'hasidhasuihduasihduasdhas' },
      ]
    }.to_json
  end
end
