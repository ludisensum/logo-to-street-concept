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
  system 'git checkout master'
  system 'ember build'
  system 'git checkout gh-pages'

  files = Dir['*'].select { |file|
    file !~ /gitignore|dist/
  }
  system "git rm -rf #{files * ' '}"
end
