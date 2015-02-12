name = 'logo-to-street-concept'

task :default do

  #cd '..'
  #cd name  # ↓ at ember app
  #↑ already here...

  system 'git checkout master'
  system 'ember build'
  rm_rf "../odd/#{name}"
  mv 'dist', "../odd/#{name}"

  cd "../odd/#{name}"  # ↓ at result

  cd '..'
  system 'ruby -run -e httpd . -p 3000'
end

task :publish do
  system 'git checkout gh-pages'

  Dir['*'].each { |file|
    next if file =~ /gitignore|dist/
    system "rm -rf #{file}"
  }

end
