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
    file !~ /gitignore|dist|node_modules|bower_components|tmp/
  }
  system "git rm -rf #{files * ' '}" # so I can see errors...
  system 'mv dist/* .'
  system 'git add -A'
  system 'git commit -m upd'
  system 'git push origin master gh-pages' # ok
end
