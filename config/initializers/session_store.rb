if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_chitter', domain: 'https://still-lake-73542.herokuapp.com'
else
  Rails.application.config.session_store :cookie_store, key: '_chitter' 
end