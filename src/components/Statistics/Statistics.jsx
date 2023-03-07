import PropTypes from 'prop-types';
import { SectionWrap, SectionStatistics, TitleStatistics, StatisticsList, ItemList, SpanStatisticsWrap, Label, Percentage } from './Statistics.styled';

export const Statistics = ( {title, stats} ) => {
    
    return (
        <SectionWrap>
            <SectionStatistics>
                {title && <TitleStatistics>{title}</TitleStatistics>}
                <StatisticsList>
                    { stats.map(data => (
                        <ItemList key = {data.id} style={{backgroundColor: `${getRandomHexColor()}`}}>
                            <SpanStatisticsWrap>
                                <Label>{data.label}</Label>
                                <Percentage>{`${data.percentage}%`}</Percentage>
                            </SpanStatisticsWrap>                            
                        </ItemList>
                    ))}   
                </StatisticsList>            
            </SectionStatistics>
        </SectionWrap>        
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})).isRequired
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}