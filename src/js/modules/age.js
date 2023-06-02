
const timeOfLife = (birthStr)=>
// export function timeOfLife (birthStr)
{
    let now = new Date();
    let birthDate = new Date(birthStr);
//получаем разницу в годах, месяцых и днях
    let age =   now.getFullYear() - birthDate.getFullYear();

    let mDiff = now.getMonth() - birthDate.getMonth();
    let dDiff = now.getDate() - birthDate.getDate();

    if (mDiff < 0 || (mDiff === 0 && dDiff < 0))
        age--;

    return age;
};
module.exports = {timeOfLife};
