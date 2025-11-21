
function elem (id: string) {
    const elem = globalThis.document.getElementById(id);
    if (!elem) throw new Error(`No #${id} element found in DOM`);
    return elem;
}

const dateTitle = elem('date');
const prevButton = elem('prev');
const nextButton = elem('next');
const checkboxes = [
    'early',
    'morning',
    'midday',
    'evening',
    'late',
    'water1',
    'water2',
    'water3',
    'water4',
].map(id => elem(id) as HTMLInputElement);

function displayDay (date: Date) {
    
    dateTitle!.innerText = `${date.toLocaleDateString()}`;
    
    for (const checkbox of checkboxes) {
        checkbox.checked = globalThis.localStorage.getItem(date.toLocaleDateString() + '_' + checkbox.id) === '1';
    }
    
}

export async function main () {
    
    const date = new Date;
    date.setHours(0, 0, 0, 0);
    displayDay(date);
    
    prevButton.addEventListener('click', () => {
        date.setDate(date.getDate() - 1);
        displayDay(date);
    });
    
    nextButton.addEventListener('click', () => {
        date.setDate(date.getDate() + 1);
        displayDay(date);
    });
    
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                globalThis.localStorage.setItem(date.toLocaleDateString() + '_' + checkbox.id, '1');
            } else {
                globalThis.localStorage.removeItem(date.toLocaleDateString() + '_' + checkbox.id);
            }
        });
    }
}
