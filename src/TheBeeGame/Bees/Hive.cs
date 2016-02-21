using System;
using System.Collections.Generic;
using System.Linq;

namespace TheBeeGame.Bees
{
    public class Hive
    {
        private readonly List<Bee> _bees;
        private readonly Random _random;
        private readonly object _lock = new object();

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
            lock (_lock)
            {
                var index = _random.Next(_bees.Count);
                var bee = _bees[index];
                bee.Hit();

                Cleanup();
            }
        }

        private void Cleanup()
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

        public void Repopulate()
        {
            lock (_lock)
            {
                _bees.Clear();
                Populate();
            }
        }
    }
}
