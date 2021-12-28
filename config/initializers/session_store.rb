if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_chitter', domain: 'chitter-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_chitter' 
end