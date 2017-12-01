array=($(ls *.md))
for var in "${array[@]}"
do
  echo "Generating HTML for ${var}..."
  $(aglio -i $var -o $var.html)
done
