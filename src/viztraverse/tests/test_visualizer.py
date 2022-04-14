from unittest import TestCase

import traversevisual

class TestVisualizer(TestCase):
    def test_is_node(self):
        s = traversevisual.deseserialize('[1,2,3,null,null,4,null,null,5]')
        self.assertFalse(isinstance(s, basestring))
