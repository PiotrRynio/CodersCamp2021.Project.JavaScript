import { getScores } from '../../model/saveScore';
import RankRecord from '../RankRecord/RankRecord';

const RankSection = () => {
  const rankSection = document.createElement('section');
  rankSection.classList.add('rankSection');

  const category = document.createElement('h2');
  category.classList.add('rankSection__category');
  category.textContent = 'Ranking: Characters';

  const ranks = document.createElement('div');
  ranks.classList.add('rankSection__ranks');

  const scores = getScores('Characters');
  const rankRecords = scores.map((playerScore, index) => RankRecord(index, playerScore));

  ranks.append(...rankRecords);

  rankSection.append(category, ranks);

  return rankSection;
};

export default RankSection;
