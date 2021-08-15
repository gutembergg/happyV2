import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  ContentWrapper,
  LogoWrapper,
  Location,
  LinkButton
} from './styles'

import { FiArrowRight } from 'react-icons/fi'

import LogoApp from '../../assets/Logo.svg'
import { api } from '../../services/api'

interface IApi {
  name: string
  email: string
}

const Landing: React.FC = () => {
  // 1. With the 2 arrays named 'suit' and 'cards' you should initialize a deck with the initializeDeck function
  // 2. The result must be: [1,H,2,H,3,H,....,Q,S,K,S]
  // 3. You have to shuffle the deck, you can write your own algo in shuffleDeck and swapCard functions

  const suit: Array<string> = ['H', 'C', 'D', 'S'] // Heart, Clubs, Diamond, Spades
  const cards: Array<string> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'J',
    'Q',
    'K'
  ]

  function start() {
    const allCards = () => {
      const total: string[] = []
      const cardsMap = suit.map((item, i) => {
        const arrayreduce = cards.reduce(
          (acc: string[], currentyValue, index) => {
            const firstArray = [...acc, currentyValue, suit[i]]

            return firstArray
          },
          []
        )
        const xtotal = [...total, arrayreduce]
        return xtotal
      })
      return cardsMap.flat(2)
    }
    // Will contain cards as an array of numbers+letters  [1,H,2,H,3,H,....,Q,S,K,S]
    const deckOfCard = new Array<string>(104)

    // Initialize the Deck with valid cards
    initializeDeck(allCards())
    console.log('Init Done')
    printDeck(allCards())

    // Suffle the cards in the deck
    shuffleDeck(deckOfCard)
    console.log('After Shuffle')
    // printDeck(deckOfCard)
  }

  // Create a fully intialiezed deck ready to be used
  function initializeDeck(theDeck: Array<string>) {
    // TODO write proper code that will initialize the deck with all cards
    for (let i = 0; i < 52; i++) {
      theDeck[i] = cards[0]
      theDeck[52 + i] = suit[0]
    }
  }

  // Swap two cards in the deck
  function swapCard(theDeck: Array<string>, card1: number, card2: number) {
    // TODO Write a function that will swap two cards
  }

  // Will shuffle a deck of card making sure the order is random
  function shuffleDeck(theDeck: Array<string>) {
    // TODO write the shuffling algo

    swapCard(theDeck, 0, 10)
  }

  // Print Out a Deck
  function printDeck(theDeck: Array<string>) {
    const total = []
    for (let i = 0; i < 52; i++) {
      console.log('Result-print', theDeck[2 * i] + theDeck[2 * i + 1] + ',')
      total.push(theDeck[2 * i] + theDeck[2 * i + 1] + ',')
    }

    shuffleDeck(total)
  }

  start()

  /// /////////////////////////////////////////////////////////////
  const allCards = () => {
    const total: string[] = []
    const cardsMap = suit.map((item, i) => {
      const arrayreduce = cards.reduce(
        (acc: string[], currentyValue, index) => {
          const firstArray = [
            ...acc,
            currentyValue,
            index < 11 ? suit[i] : suit[3]
          ]

          return firstArray
        },
        []
      )
      const xtotal = [...total, arrayreduce]
      return xtotal
    })
    return cardsMap.flat(2)
  }

  const arrayreduce = cards.reduce((acc: string[], currentyValue, index) => {
    const firstArray = [...acc, currentyValue, index < 11 ? suit[0] : suit[3]]

    return firstArray
  }, [])

  // console.log(allCards())

  /// //////////////////////////////////////////////////////////

  return (
    <Container>
      <ContentWrapper>
        <LogoWrapper>
          <img src={LogoApp} alt="logo" />
        </LogoWrapper>
        <main>
          <h1>Amenez du bonheur au monde</h1>
          <p>Visitez les orphelinat et changez les jours des enfants.</p>
        </main>

        <Location>
          <strong>Genève</strong>
          <span>Suisse</span>
        </Location>

        <Link to="/map" className="link">
          <LinkButton>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </LinkButton>
        </Link>
      </ContentWrapper>
    </Container>
  )
}

export default Landing
