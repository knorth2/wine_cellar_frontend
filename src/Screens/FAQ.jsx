import React from 'react'
import '../assets/css/faq.css';
import { Link } from 'react-router-dom'

function FAQ() {
  return (
    <div className='faq-container'>
    <Link to="/"><div className='faq-header'><h1>Wine Cellar</h1></div></Link>
    <h1>Top 10 Questions about Wine</h1>
      <div className='questions-container'>
      <h3>What are Sulfites?</h3>
        <p>Sulfites are naturally occurring chemical compounds found in wine. Although to a varying degree, sulfites are found in all wine. They are the lowest in red wines while sweet white wine has the highest sulfite content. They are not dangerous, though rarely can cause a mild allergic reaction.</p>
        <h3>Does the quality of the wine glass really make a difference?</h3>
        <p>That is going to largely depend on who you ask – according to Georg Reidel, the head of an eleven generation Austrian glass-making dynasty, claims that the shape of the wine glass is what truly matters. Smaller glasses tend to heighten the intensity while larger wine glasses encourage a more aromatic complexity.</p>
        <h3>How long does wine last once opened?</h3>
        <p>Generally, an opened bottle of wine will last from 5 to 7 days if stored in the fridge. As time passes, and as the wine oxidizes, there will be subtle taste changes. Particularly, the fruitiness dissipates and the vibrancy diminishes over time.</p>
        <h3>How should I store my wine?</h3>
        <p>Another common question about wine concerns storage. Unopened bottles should be kept in a dry, dark place with low humidity and at the proper temperature. Be sure they are not stored in an upright position. Bottles that have been opened can be stored in the refrigerator for up to a week.</p>
        <h3>What does “vintage” mean?</h3>
        <p>Vintage, with regards to wine, does not mean ‘old’. Vintage is merely referring to the year the grapes were harvested – all the grapes in a vintage wine were all or mostly grown and harvested in the same year. On the other hand, a wine that is not vintage would be a blend of harvests from several different years.</p>
        <h3> Is drinking wine good for you?</h3>
        <p>So long as it is in moderation, a red wine actually offers several benefits, including protecting against heart disease and inflammation, lower cholesterol, and has more antioxidants than white wine.</p>
        <h3>What are legs?</h3>
        <p>Again, depending on exactly who you ask, legs in wine usually signifies a high alcohol content or high sugar content. The “legs,” are caused by alcohol evaporation and as a result, droplets can be observed running down the sides of a wine glass.</p>
        <h3>What is tannin?</h3>
        <p>Tannins are one group of phenolic compounds, acquired from the skin, seeds, and stems of the grapes. They are of distinct importance concerning how a specific wine is going to taste after the aging process. Tannins are a natural preservative and give the wine a dry feel, which is especially apparent in the aftertaste of most red wines (that well-known dried-out mouth feeling). Although both red and white wines have tannins, it is considerably more apparent in red wine varieties.</p>
        <h3>Do all wines get better with age?</h3>
        <p>This is one of the most asked questions about wine. As any wine goes through the aging process, it triggers a complex chemical reaction among the acids, sugars, and substances known as phenolic compounds. These phenolic compounds can not only alter the taste of (usually for the better, but not always) but the aroma and coloring as well. Higher phenol levels in wine (certain types of Syrah, Nebbiolo) mean that it will age well. Lower phenol level wine will typically not age very well. A wine that ages extraordinarily, or those that are ‘built to age’, are incredibly rare.</p>
        <h3>What are the most important things to consider when pairing wine with food?</h3>
        <p>Despite, again, being more of personal preference, there are commonly known guidelines when pairing certain food with specific varieties of wine, mainly, the foods need to match the wine in flavor intensity. Red wines pair well with bold flavors and meats, while white goes well with lighter meats such as chicken and/or fish.</p>
        
      </div>
      <p className='science'>Interested in wine pairing? <a href="https://winefolly.com/wine-pairing/simple-food-and-wine-pairing/" target="_blank" rel="noreferrer">here!</a></p>
    </div>
    
  )
}

export default FAQ