import NewGameButton from '../components/NewGameButton';
import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import rules from '../model/rules';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const menuSection = document.createElement('section');
  menuSection.classList.add('menuSection');
  const contentSection = document.createElement('div');
  contentSection.classList.add('contentSection');

  const startGame = () => {
    console.log('The game has started');
  };

  const rulesRankChange = (e) => {
    console.log(e);
    if (e.target.textContent === 'Rules')
      e.target.innerHTML =
        '<span class="newGameButton__firstLetter">H</span><span class="newGameButton__restOfText">all Of Fame</span>';
    else if (e.target.textContent === 'Hall Of Fame')
      e.target.innerHTML =
        '<span class="newGameButton__firstLetter">R</span><span class="newGameButton__restOfText">ules</span>';
  };

  const rulesRankButton = NewGameButton(rulesRankChange);
  rulesRankButton.innerHTML =
    '<span class="newGameButton__firstLetter">H</span><span class="newGameButton__restOfText">all Of Fame</span>';

  menuSection.append(NewGameButton(startGame), rulesRankButton);
  //TODO: Add Rules/HallOfFame button

  //contentSection.append(RulesSection(rules.Characters));
  contentSection.append(RankSection());

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
