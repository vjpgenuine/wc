import React, { useState } from 'react'

const Home = () => {
    const [input, setInput] = useState('');
    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0);

    // on click function on button
    const handleClick = () => {
        // count words in string
        let clearWhiteSpace = input.replace(/\s+/g, ' ').trim();
        let wordsCount = clearWhiteSpace.split(' ');
        setWords(wordsCount.length)

        // count characters in string
        let clearSpace = input.replace(/\s+/g, '').trim();
        let charCount = clearSpace.split('');
        setCharacters(charCount.length);
    }

    return (
        <main className='font-normal w-full h-[100vh] bg-slate-900 gap-y-8 flex flex-col items-center justify-center text-white'>
            <h1 className='mt-5 font-light uppercase text-center text-2xl'>Word and Character Counter</h1>
            <span className='w-[65px] h-[1.5px] rounded-full bg-white'></span>
            <textarea rows={15} cols={1} value={input} onChange={(e) => setInput(e.target.value)}
                placeholder='type your words'
                className='max-w-[1000px] py-2 px-4 bg-slate-800 border-[0.1px] rounded-md border-slate-500 resize-none outline-0 w-[90%]'></textarea>
            <button type='button' className='bg-blue-800 hover:bg-blue-700 transition-all border-0 outline-0 rounded-sm py-1 px-8' onClick={handleClick}>check</button>
            <div className='flex md:flex-row flex-col gap-x-10 items-center justify-center'>
                <span className='text-sm flex items-center justify-center gap-x-1.5'>No. of total words  : <span className='font-semibold text-xl'>{words}</span></span>
                <span className='hidden md:block md:w-[1.5px] md:h-[35px] rounded-full bg-white'></span>
                <span className='text-sm flex items-center justify-center gap-x-1.5'>No. of total characters  : <span className='font-semibold text-xl'>{characters}</span></span>
            </div>
        </main>
    )
}

export default Home;
