for (let i = 0; i < dataCV.skills.languageSkills.length; i++){
  console.log(`language no ${i+1}: `);
  for (let propName in dataCV.skills.languageSkills[i]){
    console.log(dataCV.skills.languageSkills[i][propName]);
  }
}