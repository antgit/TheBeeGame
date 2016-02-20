using System;
using System.Collections.Generic;
using System.Linq;

namespace TheBeeGame.Bees
{
    public class Hive
    {
        private List<Bee> _bees;
        private Random _random;

        public Hive()
        {
            _bees = new List<Bee>();
            Populate();
            _random = new Random(DateTime.Now.Millisecond);
        }

        private void Populate()
        {
            _bees.Add(new Queen());

            for (int i = 0; i < 5; i++)
            {
                _bees.Add(new Worker());
            }

            for (int i = 0; i < 8; i++)
            {
                _bees.Add(new Drone());
            }
        }

        public void HitRandomBee()
        {
            var index = _random.Next(_bees.Count);
            var bee = _bees[index];
            bee.Hit();
        }

        public void Cleanup()
        {
            _bees.RemoveAll(b => b.IsDead());

            if (_bees.All(b => !(b is Queen)))
            {
                _bees.Clear();
            }
        }

        public IReadOnlyList<Bee> GetAllBees()
        {
            return _bees;
        }
    }
}
