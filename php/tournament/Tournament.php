<?php

/*
 * By adding type hints and enabling strict type checking, code can become
 * easier to read, self-documenting and reduce the number of potential bugs.
 * By default, type declarations are non-strict, which means they will attempt
 * to change the original type to match the type specified by the
 * type-declaration.
 *
 * In other words, if you pass a string to a function requiring a float,
 * it will attempt to convert the string value to a float.
 *
 * To enable strict mode, a single declare directive must be placed at the top
 * of the file.
 * This means that the strictness of typing is configured on a per-file basis.
 * This directive not only affects the type declarations of parameters, but also
 * a function's return type.
 *
 * For more info review the Concept on strict type checking in the PHP track
 * <link>.
 *
 * To disable strict typing, comment out the directive below.
 */

declare(strict_types=1);

class Team{
    public string $name = "";
    public int $wins = 0;
    public int $draws = 0;
    public int $losses = 0;

    /**
     * @param string $name
     */
    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function getPoints(): int
    {
        return ($this->wins * 3) + $this->draws;
    }

    public function getMatchesPlayed(): int
    {
        return $this->wins + $this->draws + $this->losses;
    }

    public function toString(): string
    {
        return sprintf("%-30s |  %s |  %s |  %s |  %s |  %s",
            $this->name,
            $this->getMatchesPlayed(),
            $this->wins,
            $this->draws,
            $this->losses,
            $this->getPoints()
        );
    }
}

class Tournament
{
    const HEADER = 'Team                           | MP |  W |  D |  L |  P';
    public array $teams;

    public function __construct()
    {
        $this->teams = [
            'Allegoric Alaskans' => new Team('Allegoric Alaskans'),
            'Blithering Badgers' => new Team('Blithering Badgers'),
            'Courageous Californians' => new Team('Courageous Californians'),
            'Devastating Donkeys' => new Team('Devastating Donkeys'),
        ];
    }

    public function tally(string $input): string{
        $output = self::HEADER;

        if(empty($input)){
            return $output;
        }

        $matchesArr = explode("\n", $input);

        foreach($matchesArr as $item){
            $inputArr = explode(';', $item);

            $team1 = $inputArr[0];
            $team2 = $inputArr[1];
            $matchResult = $inputArr[2];

            switch ($matchResult){
                case 'win':
                    $this->teams[$team1]->wins++;

                    $this->teams[$team2]->losses++;
                    break;
                case 'loss':
                    $this->teams[$team2]->wins++;
                    $this->teams[$team1]->losses++;
                    break;
                case 'draw':
                    $this->teams[$team2]->draws++;
                    $this->teams[$team1]->draws++;
                    break;
                default:
                    throw new Exception("invalid input");
            }
        }

        usort($this->teams, function(Team $a, Team $b){
            if($a->getPoints() == $b->getPoints()){
                return strcmp($a->name, $b->name) ? -1 : 1;
            }
            return $a->getPoints() < $b->getPoints() ? 1 : -1;
        });

        foreach($this->teams as $team){
            if($team->getMatchesPlayed() > 0)
                $output = $output . "\n" . $team->toString();
        }

        return $output;
    }
}
