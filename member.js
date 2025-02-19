function skillsMember() {
  const member = {
    name: 'John',
    age: 20,
    skills: ['JavaScript', 'React', 'Node'],
  };

  return {
    getSkills: () => member.skills,
    setSkills: (skills) => {
      member.skills = skills;
    },
  };
}