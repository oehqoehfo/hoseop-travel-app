
module.exports={
    returnWordsInEnglish:function returnWordsInEnglish(word){
        let returnWord;
        switch(word){
            case '남산공원':
                returnWord="Namsan Park";
                break;
            case 'Таганский парк (Екатеринбург)':
                returnWord="Tagansky Park, Yekaterinburg";
                break;
            case 'Музей музыкальных инструментов':
                returnWord="Museum of folk musical instruments";
                break;
            case '웨스턴 브리지':
                returnWord="Western Bridge";
                break;
            case '북촌한옥마을':
                returnWord="Bukchon Hanok Village";
                break;
            case '朝阳公园':
                returnWord="Chaoyang Park";
                break;
            case '北京鼓楼和钟楼':
                returnWord="Drum Tower and Bell Tower of Beijing";
                break;
            case '白帝城':
                returnWord="Baidicheng";
                break;
            default:
                returnWord=word;
        }
        return returnWord;
    }
};