require 'net/http'
require 'json'

module MarketstackService
  URL_BASE = 'http://api.marketstack.com/v1'

  def self.get_data(path, symbols)
    params = {
      :access_key => ENV["marketstack_access_key"],
      :symbols => symbols
    }
    complete_url = "#{URL_BASE}/#{path}"
    uri = URI(complete_url)
    uri.query = URI.encode_www_form(params)
    json = Net::HTTP.get(uri)
    api_response = JSON.parse(json)
  rescue => e
    Rails.logger.info "Error while processing request #{e}"
    nil
  end
end